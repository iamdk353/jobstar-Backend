import mongoose, { Schema } from "mongoose";

const jobsSchema = new Schema(
  {
    company: {
      type: String,
      trim: true,
      minLength: [
        5,
        "minimum length is 5 please increrase length of your name",
      ],
      maxLength: [
        15,
        "maximum length is 15 please decrease length of your name",
      ],
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId },
    jobstatus: {
      type: String,
      default: "Interview",
    },
    jobtype: {
      type: String,
      default: "Full time",
    },
    location: {
      type: String,
    },
    position: {
      type: String,
    },
  },
  { timestamps: true }
);
const jobs = mongoose.model("jobs", jobsSchema);
export default jobs;
