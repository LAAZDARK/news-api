import request from "@/utils/request";
export function list(page) {
  return request({
    url:
      "everything?q=digital&sortBy=popularity&page=" +
      page +
      "&apiKey=69343b2637a84511a1d25b320a1bd427",
    method: "get",
  });
}
