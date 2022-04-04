import {} from "./ActionTypes";

export default function generalAction(type: String, data: Object) {
  return { type, data };
}
