// A mock function to mimic making an async request for data

type Data = {
  data: number
}

// export function fetchCount(amount = 1) {
//   return new Promise<{ data: number }>((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

export function fetchCount(amount = 1) {
  return new Promise<Data>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  )
}
