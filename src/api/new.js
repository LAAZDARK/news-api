import request from "@/utils/request";
export function list(counter) {
  return request({
    url:
      "/search?q=(digital AND economy) OR " +
      counter +
      "&in=description&country=mx&token=ae17999e20cfdbce2e05729f7aa069a2",
    method: "get",
  });
}
