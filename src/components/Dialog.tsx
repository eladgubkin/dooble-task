import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const determineAppearance = (episode: number) => {
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

interface DialogProps {
  open: boolean;
  handleClose: () => void;
  character: any;
}

export const Dialog = ({ open, handleClose, character }: DialogProps) => {
  const firstEpisode = character.episode[0].replace(/^\D+/g, "");
  const lastEpisode = character.episode[character.episode.length - 1].replace(/^\D+/g, "");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <img src={character.image} alt={character.image} width="100%" />
          <Typography variant="h6" style={{ textAlign: "center" }}>
            {character.name}
          </Typography>

          <Typography style={{ margin: "10px 0 5px 10px" }}>
            First Appearance: {determineAppearance(firstEpisode)}
          </Typography>
          <Typography style={{ margin: "0 10px 10px 10px" }}>
            Last Appearance: {determineAppearance(lastEpisode)}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};
