export const determineAppearance = (episode: number) => {
  let S = "";
  let E = "";

  if (episode <= 51) S = "S05";
  if (episode <= 41) S = "S04";
  if (episode <= 31) S = "S03";
  if (episode <= 21) S = "S02";
  if (episode <= 11) S = "S01";

  if (S === "S05") E = `E${episode - 40}`;
  if (S === "S04") E = `E${episode - 31}`;
  if (S === "S03") E = `E${episode - 21}`;
  if (S === "S02") E = `E${episode - 11}`;
  if (S === "S01") E = `E${episode}`;

  return S + E;
};
