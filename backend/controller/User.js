import { SendMail } from "../middlewares/sendMail.js";
import { User } from "../model/User.js";
import jwt from "jsonwebtoken";
import cloudinary from "cloudinary";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid candentials",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Expires in 15 days
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      })
      .json({
        success: true,
        message: "logged in successfully",
        // token,
      });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      success: false,
      message: `error messages is :${e.message}`,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "logged out successfully",
      });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

export const getuser = async (req, res) => {
  try {
    const user = await User.findOne().select("-password -email");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (e) {
    console.log(`getuser: ${e}`);
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (e) {
    console.log(`myProfile: ${e}`);
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const userMessage = `Hii my name is ${name}, and my email is ${email}, and my message for you is ${message}`;

    await SendMail(userMessage, email);

    return res.status(200).json({
      success: true,
      message: "Mesaage sent successfully",
    });
  } catch (e) {
    console.log(`contact: ${e}`);
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id); // finding user

    const { name, email, password, skills, about } = req.body;

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = password;
    }

    if (skills) {
      if (skills.image1) {
        try {
          // Check if there's an existing image and if it has a valid public_id
          if (
            user.skills &&
            user.skills.image1 &&
            user.skills.image1.public_id
          ) {
            await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
          }

          // Upload the new image
          const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
            folder: "MERN_PORTFOLIO",
          });

          // Update the user's skills with the new image details
          user.skills.image1 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        } catch (error) {
          console.error(`Error updating image1:`, error.message);
          // Handle the error appropriately, e.g., log it, send a response, etc.
        }
      }

      if (skills.image2) {
        try {
          if (
            user.skills &&
            user.skills.image2 &&
            user.skills.image2.public_id
          ) {
            await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
          }
          const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
            folder: "MERN_PORTFOLIO",
          });
          user.skills.image2 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        } catch (error) {
          console.error(`Error updating image1:`, error.message);
        }
      }

      if (skills.image3) {
        try {
          if (
            user.skills &&
            user.skills.image3 &&
            user.skills.image3.public_id
          ) {
            await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
          }
          const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
            folder: "MERN_PORTFOLIO",
          });
          user.skills.image3 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        } catch (error) {
          console.error(`Error updating image1:`, error.message);
        }
      }

      if (skills.image4) {
        try {
          if (
            user.skills &&
            user.skills.image4 &&
            user.skills.image4.public_id
          ) {
            await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
          }
          const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
            folder: "MERN_PORTFOLIO",
          });
          user.skills.image4 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        } catch (error) {
          console.error(`Error updating image1:`, error.message);
        }
      }

      if (skills.image5) {
        try {
          if (
            user.skills &&
            user.skills.image5 &&
            user.skills.image5.public_id
          ) {
            await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
          }
          const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
            folder: "MERN_PORTFOLIO",
          });
          user.skills.image5 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        } catch (error) {
          console.error(`Error updating image1:`, error.message);
        }
      }

      if (skills.image6) {
        try {
          if (
            user.skills &&
            user.skills.image6 &&
            user.skills.image6.public_id
          ) {
            await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
          }
          const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
            folder: "MERN_PORTFOLIO",
          });
          user.skills.image6 = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        } catch (error) {
          console.error(`Error updating image1:`, error.message);
        }
      }
    }

    if (about) {
      if (about.name) {
        user.about.name = about.name;
      }
      if (about.title) {
        user.about.title = about.title;
      }
      if (about.subtitle) {
        user.about.subtitle = about.subtitle;
      }
      if (about.description) {
        user.about.description = about.description;
      }
      if (about.quote) {
        user.about.quote = about.quote;
      }

      if (about.avatar) {
        await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);
        const mycloud = await cloudinary.v2.uploader.upload(about.avatar, {
          folder: "MERN_PORTFOLIO",
        });

        user.about.avatar = {
          public_id: mycloud.public_id,
          url: mycloud.secure_url,
        };
      }
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User Update successfully",
      user,
    });
  } catch (error) {
    console.log("error is :", error);
    return res.status(400).json({
      success: false,
      message: `error messages is :${error.message}`,
    });
  }
};

export const addtimeline = async (req, res) => {
  try {
    const { title, description, fromDate, toDate } = req.body;

    const user = await User.findById(req.user._id);

    user.timeline.unshift({
      title,
      description,
      fromDate,
      toDate,
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added to Timeline",
      user: JSON.parse(JSON.stringify(user.timeline)),
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addYoutube = async (req, res) => {
  try {
    const { url, title, image } = req.body;

    const user = await User.findById(req.user._id);

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "MERN_PORTFOLIO",
    });

    user.youtube.unshift({
      url,
      title,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added to YouTube",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addProjects = async (req, res) => {
  try {
    const { url, title, description, techStack, image } = req.body;

    const user = await User.findById(req.user._id);

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "MERN_PORTFOLIO",
    });

    user.projects.unshift({
      url,
      title,
      description,
      techStack,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Added project suceessfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deletetimeline = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    user.timeline = user.timeline.filter(
      (item) => item._id.toString() !== id.toString()
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from Timeline",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteYouTube = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    const video = user.youtube.find(
      (video) => video._id.toString() === id.toString()
    );

    await cloudinary.v2.uploader.destroy(video.image.public_id);

    user.youtube = user.youtube.filter(
      (video) => video._id.toString() !== id.toString()
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted from YouTube",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProjects = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user._id);

    const project = user.projects.find(
      (project) => project._id.toString() === id.toString()
    );

    await cloudinary.v2.uploader.destroy(project.image.public_id);

    user.projects = user.projects.filter(
      (project) => project._id.toString() !== id.toString()
    );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Deleted the Project",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// MONGO_URI = "mongodb://127.0.0.1:27017/myPortfolio"
