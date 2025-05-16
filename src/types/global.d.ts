
interface Window {
  gtag: (
    command: string,
    targetId: string,
    config?: {
      page_path?: string;
      event_category?: string;
      event_label?: string;
      value?: number;
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
}
