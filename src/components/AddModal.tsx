interface IAddModal {
  checkboxValue: boolean;
  setCheckboxValue: (param: boolean) => void;
  inputValue: string;
  setInputValue: (param: string) => void;
  handleSave: () => void;
  handleCancel: () => void;
  // typeModal: string;
}

export const AddModal = (params: IAddModal) => {
  const {
    checkboxValue,
    setCheckboxValue,
    inputValue,
    setInputValue,
    handleSave,
    handleCancel,
  } = params;

  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex  min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start mb-10 mb-5">
            <div className=" sm:mt-0 sm:ml-4 sm:text-left">
              <p className="text-lg  leading-5 text-black-500">
                {'Adding new Todo'}
              </p>
            </div>
          </div>
          <form className="flex flex-row w-9/12">
            <div className="border-b border-teal-500 py-2 w-full">
              <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Title"
              />
            </div>

            <div className="flex flex-row items-center ml-5">
              <input
                checked={checkboxValue}
                id="disabled-checked-checkbox"
                type="checkbox"
                value="hello"
                onChange={e => setCheckboxValue(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">
                Completed
              </label>
            </div>
          </form>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                onClick={() => handleSave()}
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                {'Save'}
              </button>
            </span>
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                onClick={() => handleCancel()}
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                {'Close'}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <h1 className="my-10">New BLog</h1>
        <form className="w-9/12">
          <div className="flex items-center border-b border-teal-500 py-2 w-full">
            <input
              onChange={e => setTitle(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="relative mt-6 border border-indigo-600 data-twe-input-wrapper-init">
            <textarea
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none "
              id="exampleFormControlTextarea1"
              rows={4}
              placeholder="Content"
              onChange={e => setContent(e.target.value)}
            ></textarea>
          </div>
        </form>
</h1> */
}
