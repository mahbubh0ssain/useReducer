import { useReducer } from "react";

function App() {
  const initialState = {};

  const reducer = (state, action) => {
    switch (action?.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="max-w-[768px] mx-auto my-12">
        <form onSubmit={handleSubmit} className="shadow p-10 m-4">
          <h1 className="text-center text-2xl">This is Simple Form</h1>

          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="border rounded p-2"
              type="text"
              name="name"
              placeholder="Enter your name"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name">Email</label>
            <input
              className="border rounded p-2"
              type="email"
              name="email"
              placeholder="Enter your email"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <button
            className="px-4 py-3 bg-indigo-500 text-white rounded w-full font-bold mt-6"
            type="submit"
          >
            Submit Now
          </button>
        </form>
      </div>

      <div className="m-4">
        <div className="max-w-[768px] mx-auto shadow p-10 m-4 ">
          <h2 className="text-2xl text-center mb-2">This is output</h2>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="border rounded p-2"
              type="text"
              name="name"
              disabled
              defaultValue={state?.name}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="name">Email</label>
            <input
              className="border rounded p-2"
              type="email"
              disabled
              defaultValue={state?.email}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
