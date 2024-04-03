// Enum

enum SeverResponseStatus {
  Success,
  Error,
}

interface ServerResponse {
  result: SeverResponseStatus;
  data: string[];
}

function getSeverResponse(): ServerResponse {
  return {
    result: SeverResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

const response: ServerResponse = getSeverResponse();
