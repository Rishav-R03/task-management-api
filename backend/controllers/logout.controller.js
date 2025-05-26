export const logOut = async (req,res) =>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            success:true,
            message:"Logged Out Successfully"
        });
    } catch (error) {
        console.log("Error logging out",error.message);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}
export default logOut;