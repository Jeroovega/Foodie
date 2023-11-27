import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

export const Comentarios = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <button
        className="px-2 py-2 mt-2 text-black bg-white rounded-md cursor-pointer  btn ml-36 hover:text-white"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Escribir una reseña
        <img class="EgL07d" aria-hidden="true" draggable="false" alt="Escribir una reseña" src="//www.gstatic.com/images/icons/material/system_gm/1x/rate_review_gm_blue_18dp.png"></img>
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold"></h3>
          <div className="flex modal-action">
            <div className="flex h-80">
              <div className="mt-20">
                <form method="dialog">
                  <textarea
                    className="bg-transparent textarea"
                    placeholder="Deje un comentario"
                  ></textarea>
                  <button className="mx-2 rounded-r-full btn">Enviar</button>
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
