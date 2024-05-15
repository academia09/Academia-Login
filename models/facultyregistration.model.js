module.exports = (mongoose) => {
  const FacultyRegistrationSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true, // This makes the 'email' field required
    },
    password: String,
    role: String,
    confirmPassword: String,
  });

  // Explicitly set the table name to 'facultyregistrations'
  const FacultyRegistration = mongoose.model(
    "facultyregistrations", // This will be the table name in the database
    FacultyRegistrationSchema
  );

  return FacultyRegistration;
};
