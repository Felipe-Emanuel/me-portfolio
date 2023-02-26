import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import firebase from "@/firebase/config";
import api from "../services/api";

type LastViewList = {
  acessLlink: string;
  id: string;
  image: string;
  name: string;
};

type LastViewProps = {
  userId: string;
  name: string;
  id: string;
  date: string | Date;
  image: string;
  acessLlink: string;
  gitLlink: string;
  subtitle: string;
  techs: string[];
  original: boolean;
  responsive: boolean;
  goal: string;
  collaborators: string;
};

export function useData() {
  const { user } = useAuth();
  const [dataGet, setDataGet] = useState([]);
  const [lastViewList, setLastViewList] = useState<LastViewList[]>([]);
  const [lastViews, setLastViews] = useState<any>([]);

  const getData = async (path: string, limit?: number) => {
    const req = await api
      .get(`/api/${path}`, {
        params: {
          limit: limit ?? Infinity,
        },
      })
      .then((response) => setDataGet(response.data.images))
      .catch((err) => console.error(err));
    return req;
  };

  async function getLastViews() {
    const recentlyView = await firebase
      .firestore()
      .collection("recently")
      .where("lastView.userId", "==", user?.uid)
      .get();

    const data = recentlyView.docs.map((u) => {
      return {
        id: u.id,
        ...u.data(),
      };
    });

    setLastViews(data);
  }

  const postFireBaseLastViews = async (prop: LastViewProps) => {
    const lastView = {
      userId: user?.uid,
      name: prop.name,
      id: +prop.id,
      date: new Date(),
      image: prop.image,
      acessLlink: prop.acessLlink,
      gitLlink: prop.gitLlink,
      subtitle: prop.subtitle,
      techs: prop.techs,
      original: prop.original,
      responsive: prop.responsive,
      goal: prop.goal,
      collaborators: prop.collaborators,
    };

    const docRef = firebase
      .firestore()
      .collection("recently")
      .where("lastView.id", "==", lastView?.id)
      .where("lastView.userId", "==", user?.uid);

    docRef.get().then((doc) => {
      doc.size === 0
        ? firebase
            .firestore()
            .collection("recently")
            .add({
              lastView: lastView,
            })
            .then((doc) => {
              const data = {
                id: doc.id,
                acessLlink: lastView.acessLlink,
                image: lastView.image,
                name: lastView.name,
                subtitle: lastView.subtitle
              };
              setLastViewList([...lastViewList, data]);
            })
            .catch((err) => console.error(err))
        : false;
    });
  };

  async function handleDelet(id: string) {
    await firebase
      .firestore()
      .collection("recently")
      .doc(id)
      .delete()
      .then(() => {
        const deletedLastView = lastViews.filter((item: { id: string }) => {
          return item.id !== id;
        });

        setLastViews(deletedLastView);
      })
      .catch((err) => console.log(err));
  }

  return {
    dataGet,
    lastViewList,
    lastViews,
    getLastViews,
    getData,
    postFireBaseLastViews,
    handleDelet,
  };
}
