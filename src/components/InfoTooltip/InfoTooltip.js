import "./InfoTooltip.css";

export default function InfoTooltip({ onClose, props, isOpen }) {
   return (
      <div
         className={
            isOpen
               ? `popup popup_type_info popup_opened`
               : `popup popup_type_info`
         }
      >
         <div className="popup__overlay_ifo" onClick={onClose} />
         <div className="popup__container">
            <div
               className={`popup__info_icon popup__info_icon-${props?.class}`}
            ></div>
            <h1 className="popup__info-title">{props?.text}</h1>
            <button
               className="popup__button-close"
               type="button"
               onClick={onClose}
            />
         </div>
      </div>
   );
}
