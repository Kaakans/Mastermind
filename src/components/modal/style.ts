export const styles = {
    backdrop: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "inherit",
        backgroundColor: "rgba(67, 67, 67, 0.7)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    modal: {
        backgroundColor: "white",
        pointerEvents: "none",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    controls: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    controlButton: {
        margin: "0 10px"
    }
}