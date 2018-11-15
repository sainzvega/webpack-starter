module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  console.log(mode);
  return {
    mode
  };
};
