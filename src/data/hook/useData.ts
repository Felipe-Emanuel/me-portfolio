import { useState } from "react";
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
  userId: string,
  name: string,
  id: string,
  date: string | Date,
  image: string,
  acessLlink: string,
  gitLlink: string,
};

export function useData() {
  const { user } = useAuth();
  const [dataGet, setDataGet] = useState([]);
  const [lastViewList, setLastViewList] = useState<LastViewList[]>([]);

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

  const postFireBaseLastViews = async (prop: LastViewProps) => {
    const lastView = {
      userId: user?.uid,
      name: prop.name,
      id: +prop.id,
      date: new Date(),
      image: prop.image,
      acessLlink: prop.acessLlink,
      gitLlink: prop.gitLlink,
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
              };
              setLastViewList([...lastViewList, data]);
            })
            .catch((err) => console.error(err))
        : false;
    });
  };

  return {
    dataGet,
    lastViewList,
    getData,
    postFireBaseLastViews,
  };
}
