export const DAY = "YYYY-MM-DD";
// export const SHIFTS = [
//   "8AM",
//   "9AM",
//   "10AM",
//   "11AM",
//   "12PM",
//   "13PM",
//   "14PM",
//   "15PM",
//   "16PM",
//   "17PM",
//   "18PM",
//   "19PM",
// ];
export const SHIFTS = ["1", "2", "3", "4"];
export const SHIFTS_NAME = [
  "Kíp 1 (7-9h)",
  "Kíp 2 (9-11h)",
  "kíp 3 (2-4h)",
  "kíp 4 (4-6h)",
];
export const operator_name = [
  "Nguyen Van A",
  "Thuận Bình",
  "Nguyễn Châu Anh",
  "Lý Đào",
];
export const userName = "Nguyễn Thị Thanh";
export const ID = "123";
export const ALL_TEETH = [
  11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33,
  34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48,
];
export const ALL_TEETH_CHILD = [
  111, 112, 113, 114, 115, 116, 117, 118, 121, 122, 123, 124, 125, 126, 127,
  128, 131, 132, 133, 134, 135, 136, 137, 138, 141, 142, 143, 144, 145, 146,
  147, 148,
];
export const ALL_TOP_TEETH = [
  11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28,
];
export const ALL_BOTTOM_TEETH = [
  31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48,
];
export const ALL_TOP_CHILD = [
  111, 112, 113, 114, 115, 116, 117, 118, 121, 122, 123, 124, 125, 126, 127,
  128,
];
export const ALL_BOTTOM_CHILD = [
  131, 132, 133, 134, 135, 136, 137, 138, 141, 142, 143, 144, 145, 146, 147,
  148,
];


export const numberToLetter_left: Record<number, string> = {
  111: "child",
  112: "child",
  113: "child",
  114: "child",
  115: "child",
};
export const numberToLetter_right: Record<number, string> = {
  21: "A",
  23: "B",
  24: "C",
  25: "D",
  26: "E",
};
export const numberToNumberRight: Record<number, string> = {
  9: "1",
  10: "2",
  11: "3",
  12: "4",
  13: "5",
  14: "6",
  15: "7",
  16: "8",
};
export const numberToNumberLeft: Record<number, string> = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
};
const url = window.location.href;
export const CURRENT_URL =
  "https://64380678894c9029e8cca33d.mockapi.io/api/products";
export const toothPosion = [21,22,41,43];