export const homepageController = (req, res) => {
  res.status(200).json({
    message: "Welcome to the home page",
    success: true
  });
};
export default homepageController;