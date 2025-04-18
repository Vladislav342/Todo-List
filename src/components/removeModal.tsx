import { labelsAskModal } from '@/constants';
import { BsTrash } from 'react-icons/bs';

interface IRemoveModal {
  handleCLoseAskModal: (action: string) => void;
}

export const RemoveModal = (param: IRemoveModal) => {
  const { handleCLoseAskModal } = param;

  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full sm:mx-0 sm:h-10 sm:w-10">
              <BsTrash className="w-32 h-32 text-red-600 mx-auto" />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  {labelsAskModal.askMsg}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                onClick={() => handleCLoseAskModal('remove')}
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                {labelsAskModal.btnYes}
              </button>
            </span>
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                onClick={() => handleCLoseAskModal('close')}
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                {labelsAskModal.btnNo}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
