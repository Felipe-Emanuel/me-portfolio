import { useState, ReactNode } from "react";
import { useAuth } from "./useAuth";
import firebase from "@/firebase/config";
import api from "../services/api";

type LastViewList = {
  acessLlink: string;
  id: string;
  image: string;
  name: string;
};

export function useData() {
  const { user } = useAuth();
  const [dataGet, setDataGet] = useState<any>([]);
  const [dataPost, setDataPost] = useState<any>([]);
  const [lastViewList, setLastViewList] = useState<LastViewList[]>([]);
  const [checklastViewList, setCheckLastViewList] = useState('');

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

  const postFireBaseLastViews = async (prop: any) => {
    const lastView = {
      userId: user?.uid,
      name: prop.name,
      id: +prop.id,
      date: new Date(),
      image: prop.image,
      acessLlink: prop.acessLlink,
      gitLlink: prop.gitLlink,
    };

    if (lastView.name !== checklastViewList) {

      const lastViewFromFireStore = await firebase
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

          setLastViewList([...lastViewList, data])
          setCheckLastViewList(data.name)
        })
        .catch((err) => console.error(err));
      return lastViewFromFireStore;
    } else {
      return;
    }
  };

  return {
    dataGet,
    dataPost,
    lastViewList,
    getData,
    postFireBaseLastViews,
  };
}
