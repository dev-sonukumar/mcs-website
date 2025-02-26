import { Scrollbars } from "react-custom-scrollbars-2";

const CustomScrollWrapper = ({ children }) => {
  return (
    <Scrollbars
      style={{ width: "100vw", height: "100vh" }} // Full page scroll
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: "#4A90E2", // Custom scrollbar color
            borderRadius: "5px",
            width: "8px",
          }}
        />
      )}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            width: "10px",
            right: "2px",
            bottom: "2px",
            top: "2px",
            borderRadius: "4px",
            backgroundColor: "#e0e0e0", // Scroll track color
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollWrapper;
