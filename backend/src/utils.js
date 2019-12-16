export function responseFactory(statusCode, body) {
  return {
    statusCode,
    data: {
      ...body
    }
  }
}