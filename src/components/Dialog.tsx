import { DialogProps } from "../types/props.types";
import { Backdrop, Typography, Box, Modal, Fade } from "@mui/material";
import { determineAppearance } from "../utils/determineAppearance";

export const Dialog = ({ open, handleClose, character }: DialogProps) => {
  const firstEpisode = Number(character.episode[0].replace(/^\D+/g, ""));
  const lastEpisode = Number(character.episode[character.episode.length - 1].replace(/^\D+/g, ""));

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
