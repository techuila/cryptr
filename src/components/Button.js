import Spinner from './Spinner';

function Button({ loading, children }) {
  return (
    <button
      className={`w-full h-12 ${loading ? 'bg-blue-300' : 'bg-blue-500'} hover:bg-blue-400 text-white rounded-md mt-4 mb-8 flex justify-center items-center`}
    >
      {loading && <Spinner />}
      {/* <Spinner /> */}
      <div className="mx-2"></div>
      {children}
    </button>
  );
}

Button.defaultProps = {
  loading: false,
};
export default Button;
