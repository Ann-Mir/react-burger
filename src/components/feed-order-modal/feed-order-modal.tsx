import React from 'react';
import FeedOrderDetails from '../feed-order-details/feed-order-details';
import Modal from '../modal/modal';


type TFeedOrderModalProps = {
  onClose: () => void;
};

function FeedOrderModal({ onClose }: TFeedOrderModalProps) {

  return (
    <Modal onClose={onClose}>
      <FeedOrderDetails />
    </Modal>
  )
}


export default FeedOrderModal;
