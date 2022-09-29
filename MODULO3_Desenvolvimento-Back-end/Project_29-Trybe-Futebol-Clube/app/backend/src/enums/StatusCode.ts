enum StatusCode {
  HTTP_OK = 200,
  HTTP_CREATED,
  HTTP_NO_CONTENT = 204,
  HTTP_BAD_REQUEST = 400,
  HTTP_UNAUTHORIZED,
  HTTP_NOT_FOUND = 404,
  HTTP_CONFLICT = 409,
  HTTP_UNPROCESSABLE_ENTITY = 422,
  HTTP_INTERNAL_SERVER_ERROR = 500,
}

export default StatusCode;