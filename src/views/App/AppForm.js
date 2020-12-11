import PropTypes from 'prop-types';
import Button from '../../components/Button';

function AppForm({ tabState: [activeTab, setActiveTab], handleSubmit, handleKeyDown, result, loading, secretKey }) {
  const tabs = ['Encrypt', 'Decrypt'];
  // console.log('AppForm.js | RENDER');

  return (
    <div className="p-6 w-full md:w-4/5 mx-auto">
      <p className="text-2xl text-center mb-4 text-white">Cryptr App</p>

      <div className="h-12 text-white grid grid-cols-2 gap-4 my-12">
        {tabs.map((tab, index) => (
          <div
            key={`${tab}-${index}`}
            className={`transition-all text-center flex flex-col justify-center rounded-md hover:bg-blue-400 cursor-pointer ${
              activeTab === tab && 'active-tab'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <form name="form" onSubmit={handleSubmit}>
        <div>
          <label className="text-gray-200">Secret Key</label>
          <input name="secret_key" className="input-field" type="text" placeholder="Default key is used if field is empty" />
        </div>
        <br />

        <div>
          <label className="text-gray-200">Text</label>
          <textarea name="text" className="text-area" rows="10" onKeyDown={handleKeyDown} />
        </div>

        <div>
          <Button loading={loading}>Generate</Button>
        </div>

        <div>
          <label className="text-gray-200">Result {result && `(${activeTab}ed)`}</label>
          <pre className="pre">{result}</pre>
        </div>
      </form>
    </div>
  );
}

AppForm.propTypes = {
  tabState: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AppForm;
