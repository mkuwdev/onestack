import { Card, CardHeader, CardBody } from '../ui/Card'
import { Modal } from "../elements";
import React, { useEffect, useState } from "react";

const CreatePostButton = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showInput = async () => {
    setIsModalOpen(true);
  };

  const submitForm = async () => {
    setIsModalOpen(false);
  };

  return (
    <Card className="mb-5">
        <CardBody>
          <button onClick={() => showInput()} class="bg-transparent text-sm bg-indigo-900 font-semibold text-white py-2 px-4 border border-indigo-900 hover:border-transparent rounded-xl font-mono w-full">
              Ask a Question
          </button>
          {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
            }}
          >
            <div className="bg-white px-5 py-5">
              <div className="flex items-center gap-2 mb-5">
                  <div className="font-bold font-mono">✍ Ask a Question</div>
              </div>
              <div class="flex flex-wrap -mx-3">
              <div class="w-full px-3 mb-3">
                <label class="block uppercase tracking-wide text-md font-bold font-mono mb-2" for="grid-title">
                  Question Title
                </label>
                <input class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline" id="grid-title" type="text" placeholder="Title"/>
              </div>
              <div class="w-full px-3 mb-3">
                <label class="block uppercase tracking-wide text-md font-bold font-mono mb-2" for="grid-content">
                  Question Content
                </label>
                <textarea class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline" id="grid-content" type="text" placeholder="Enter question here.."/>
              </div>
              <button onClick={() => submitForm()} class="text-xl bg-transparent text-sm text-indigo-900 font-bold text-white py-2 px-4 border border-none hover:border-transparent rounded-xl font-mono w-full">
                  ASK
              </button>
            </div>
            </div>
          </Modal>
          )}
        </CardBody>
    </Card>
  )
}

export default CreatePostButton