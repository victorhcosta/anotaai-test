import { ICard } from "../../pages/list/interfaces/card";

export const tree: ICard = {
  id: 1,
  title: "Árvore",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-01.jpg",
  type: "1"
};

export const flower: ICard = {
  id: 2,
  title: "Flor",
  description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-02.jpg",
  type: "2"
};

export const pizzaSlice: ICard = {
  id: 3,
  title: "Fatia de pizza",
  description: "Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-03.jpg",
  type: "3"
};

export const sunflower: ICard = {
  id: 4,
  title: "Girassol",
  description: "It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-04.jpg",
  type: "2"
};

export const pizza: ICard = {
  id: 5,
  title: "Pizza",
  description: "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-05.jpg",
  type: "3"
};

export const wholePizza: ICard = {
  id: 6,
  title: "Pizza inteira",
  description: "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  img: "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-06.jpg",
  type: "3"
};

export const list: ICard[] = [tree, flower, pizzaSlice, sunflower, pizza, wholePizza];
