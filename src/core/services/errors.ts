export function consoleError(error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(error);
  }

  return error;
}
