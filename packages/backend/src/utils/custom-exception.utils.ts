class CustomException {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }

  static BadRequest(message: string) {
    return new CustomException(400, message);
  }

  static Unauthorized() {
    return new CustomException(401, "Unauthorized");
  }

  static Forbidden(message: string) {
    return new CustomException(403, message);
  }

  static NotFound(message: string) {
    return new CustomException(404, message);
  }
}

export default CustomException;
