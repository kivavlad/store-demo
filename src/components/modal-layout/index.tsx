import {memo, useRef, useEffect} from "react";
import styles from "./style.module.css";

interface IProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalLayout: React.FC<IProps> = ({title, onClose, children}) => {
  // Корректировка центра, если модалка больше окна браузера.
  const layout = useRef<any>();
  const frame = useRef<any>();

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      // Центрирование frame или его прижатие к краю, если размеры больше чем у layout
      layout.current.style.alignItems = (layout.current.clientHeight < frame.current.clientHeight)
        ? 'flex-start'
        : 'center';
      layout.current.style.justifyContent = (layout.current.clientWidth < frame.current.clientWidth)
        ? 'flex-start'
        : 'center';
    });
    // Следим за изменениями размеров layout
    resizeObserver.observe(layout.current);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
      resizeObserver.disconnect();
    }
  }, []);

  return (
    <div className={styles.modal} ref={layout}>
      <div className={styles.frame} ref={frame}>
        <div className={styles.head}>
          <h1 className={styles.title}>{title}</h1>
          <button className={styles.close} onClick={onClose}>Close</button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default memo(ModalLayout);