'use client';

import { useState, useEffect } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { FiCheck } from 'react-icons/fi';
import { ITodo } from '@/types/ITodo';
import { getTodoData, removeTodo, createTodo } from '@/lib/https';
import { FiX } from 'react-icons/fi';
import { RemoveModal } from '@/components/removeModal';
import { ErrorModal } from '@/components/ErrorModal';
import { PopupModal } from '@/components/PopupModal';
import { AddModal } from '@/components/AddModal';
import { labelsErrorModal } from '@/constants';

export default function TodoPage() {
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [isShowEditAddModal, setShowEditAddModal] = useState<boolean>(false);
  const [isShowAskModal, setShowAskModal] = useState<boolean>(false);
  const [isRemove, setRemove] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [ID, setId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  let [search, setSearch] = useState<string>('');
  const [isErrorModal, setErrorModal] = useState<boolean>(false);
  const [msgOfError, setMsgOfError] = useState<string>('');
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [add, setAdd] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getTodoData();
        setTodos(data);
      } catch (err: any) {
        setMsgOfError(labelsErrorModal.getTodo);
        setErrorModal(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getTodoData();
        let filteredData = data.filter(item =>
          item.title.toLowerCase().includes(search.toLowerCase()),
        );
        setTodos(filteredData);
      } catch {
        setMsgOfError(labelsErrorModal.getTodo);
        setErrorModal(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [search]);

  useEffect(() => {
    if (add) {
      (async () => {
        try {
          setLoading(true);
          await createTodo({ title: inputValue, completed: checkboxValue });
          setLoading(false);
          setShowModal(true);
        } catch {
          setMsgOfError(labelsErrorModal.creatNewTodo);
          setErrorModal(true);
        } finally {
          setInputValue('');
          setCheckboxValue(false);
        }
      })();
    }
  }, [add]);

  useEffect(() => {
    if (isRemove && ID) {
      (async () => {
        try {
          await removeTodo(ID);
          setShowModal(true);
        } catch {
          setMsgOfError(labelsErrorModal.removeBlog);
          setErrorModal(true);
        }
      })();
      setId(null);
    }
  }, [isRemove]);

  const handleCLoseAskModal = (action: string) => {
    if (action === 'remove') {
      setRemove(true);
    }
    setShowAskModal(false);
  };

  const handleErrorModal = () => {
    setErrorModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    window.location.reload();
  };

  const handleAdd = () => {
    setShowEditAddModal(true);
  };

  const handleSave = () => {
    setShowEditAddModal(false);
    setAdd(true);
  };

  const handleCancel = () => {
    setShowEditAddModal(false);
    setId(null);
    setInputValue('');
    setCheckboxValue(false);
  };

  return (
    <div>
      <div className="">
        <h2 className="m-5 text-4xl md:text-5xl font-bold text-emerald-600 tracking-tight">
          {'Todos List'}
        </h2>
        <div className="flex justify-center items-center mt-15">
          <form className="w-full max-w-sm flex-row">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                onChange={e => setSearch(e.target.value)}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
          </form>

          <div className="mx-4 bg-pink-400 hover:bg-pink-500 text-white rounded py-1 px-2">
            <button onClick={handleAdd}>Add New Todo</button>
          </div>
        </div>
        <div className="flex justify-center overflow-hidden ">
          <ul className="flex-autoflex-auto w-500">
            {loading && (
              <ImSpinner9 className="h-20 w-40 mt-32 mx-auto text-green-300 animate-spin"></ImSpinner9>
            )}
            {!loading ? (
              todos.length ? (
                todos.map(({ id, title, completed }) => (
                  <li key={id} className="flex my-10 mx-160 min-w-100">
                    <div className="flex flex-row w-4/5">
                      <span className="font-normal text-lg items-center hover:text-blue-400">
                        {title}
                      </span>
                    </div>
                    <div className="flex flex-row">
                      {completed ? (
                        <FiCheck className="h-10 w-40 text-green-300" />
                      ) : (
                        <FiX className="h-10 w-40 text-red-300" />
                      )}
                      <button
                        className="bg-sky-300 hover:bg-sky-600 text-white rounded py-1 px-2 max-h-10"
                        onClick={() => {
                          setId(id);
                          setShowAskModal(true);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <hr />
                  </li>
                ))
              ) : (
                <h1 className="mt-48 text-center">{'No Todos'}</h1>
              )
            ) : null}
          </ul>
        </div>
      </div>

      {isShowAskModal ? (
        <RemoveModal handleCLoseAskModal={handleCLoseAskModal} />
      ) : null}

      {isErrorModal ? (
        <ErrorModal handleErrorModal={handleErrorModal} msg={msgOfError} />
      ) : null}

      {isShowModal ? <PopupModal add={add} handleClose={handleClose} /> : null}

      {isShowEditAddModal ? (
        <AddModal
          handleSave={handleSave}
          handleCancel={handleCancel}
          checkboxValue={checkboxValue}
          setCheckboxValue={setCheckboxValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ) : null}
    </div>
  );
}
