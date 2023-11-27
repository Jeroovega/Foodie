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
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postComment } from "../../features/commet/comment";

export const Comentarios = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [description, setData] = React.useState("");


  const handleCommentChange = (e) => {
    setData(e);
  };

  const handlePostComment = async () => {
    const restaurantId = window.location.pathname.split("/")[2];
    const id = localStorage.getItem('userId');
    try {
      const response = await dispatch(postComment({ id, description, restaurantId }));
      if (response.status === 201) {
        console.log(response);
        navigate(`/restaurants/${restaurantId}/details`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-34">
      <button
        className="btn px-2 py-2 rounded-md  mt-2 text-black bg-white hover:text-white cursor-pointer"
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
                    onChange={(e) => handleCommentChange(e.target.value)}
                  ></textarea>
                  <button className="btn rounded-r-full mx-2"
                    onClick={handlePostComment}>Enviar</button>
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
