module.exports = (mongoose) => {
  const StudentRegistrationSchema = mongoose.Schema({
    name: Object,

    studentmobile: {
      type: Number,
      required: true, // This makes the 'studentmobile' field required
    },
    email: {
      type: String,
      required: true, // This makes the 'email' field required
    },
    fees: String,
    gender: String,
    password: {
      type: String,
      required: true, // This makes the 'password' field required
    },
    dumID: String,
  });

  // Explicitly set the table name to 'studentregistrations'
  const StudentRegistration = mongoose.model(
    "studentregistrations", // This will be the table name in the database
    StudentRegistrationSchema
  );

  return StudentRegistration;
};
