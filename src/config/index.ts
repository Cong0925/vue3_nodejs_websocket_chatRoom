const DEFAULT_CONFIG = {
  // 标题
  APP_NAME: "APP_NAME",
  // 版本号
  APP_VER: "1.0.0",

  // 内核版本号
  CORE_VER: "1.0.0",

  // 接口地址
  API_URL: "http://0.0.0.0:8000/api",

  // 请求超时
  TIMEOUT: 10000,

  // TokenName
  TOKEN_NAME: "Token",

  // Token前缀，注意最后有个空格，如不需要需设置空字符串
  TOKEN_PREFIX: "",

  // 追加其他头
  HEADERS: {},

  // 请求是否开启缓存
  REQUEST_CACHE: false,

  PUBLIC_KEY: "",

}
 
export default DEFAULT_CONFIG
