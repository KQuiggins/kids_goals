import register from "../../assets/images/register.png";
import avatar from "../../assets/images/avatar.png";

const handleClick = (e:  React.SyntheticEvent ) => {
  e.preventDefault()
  console.log('The link was clicked.');

}

const Register = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Image Column */}
      <div className="m-8 p-4">
        <img
          src={register}
          alt="Welcome"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Sign-In Form Column */}
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
        <div className="flex flex-col items-center">
          <div className="avatar  mb-8">
            <div className="w-24 rounded-full">
              <img src={avatar} />
            </div>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
        </div>

        <button onClick={handleClick} className="btn btn-primary w-full mt-4">Register</button>

        <div className="text-center mt-4">
          <a href="/register" className="link link-secondary">
            SignIn
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register