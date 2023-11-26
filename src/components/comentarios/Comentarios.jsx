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
    <>
      <button
        className="btn px-2 py-2 rounded-md ml-36 mt-2 text-black bg-white hover:text-white cursor-pointer"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Escribir una reseña
        <img class="EgL07d" aria-hidden="true" draggable="false" alt="Escribir una reseña" src="//www.gstatic.com/images/icons/material/system_gm/1x/rate_review_gm_blue_18dp.png"></img>
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"></h3>
          <div className="modal-action flex">
            <div className="flex h-80">
              <div className="mt-20">
                <form method="dialog">
                  <textarea
                    className="textarea bg-transparent"
                    placeholder="Deje un comentario"
                  ></textarea>
                  <button className="btn rounded-r-full mx-2">Enviar</button>
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
