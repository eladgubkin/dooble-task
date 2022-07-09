import GIF from "../../assets/VEW6.gif";

export const NotFound = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={GIF} alt="gif" width={300} />
      <h4 style={{ textAlign: "center" }}>
        404
        <br />
        No characters found!
      </h4>
    </div>
  );
};
