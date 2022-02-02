export const formatErrors = (key: string, value: any) => {
  var obj = {} as any;
  var result = (obj = {});
  var arr = key.split(".");
  for (var i = 0; i < arr.length - 1; i++) {
    obj = obj[arr[i]] = {};
  }
  obj[arr[arr.length - 1]] = value;
  return result;
};
