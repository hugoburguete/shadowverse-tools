import { useEffect, useState } from 'react';

/**
 * These device sizes follow the same breakpoints as tailwind, so it's useful
 * when we want to use it in tandem with styling.
 */
export enum DeviceSize {
  XS,
  SM,
  MD,
  LG,
  XL,
}

export type UseDeviceResponse = {
  deviceSize: DeviceSize;
};

const useDevice = (): UseDeviceResponse => {
  const [deviceSize, setDeviceSize] = useState(DeviceSize.XS);

  useEffect(() => {
    const updateDeviceSize = () => {
      switch (true) {
        case window.matchMedia('(max-width: 450px)').matches:
          setDeviceSize(DeviceSize.SM);
          break;
        case window.matchMedia('(max-width: 768px)').matches:
          setDeviceSize(DeviceSize.MD);
          break;
        case window.matchMedia('(max-width: 1024px)').matches:
          setDeviceSize(DeviceSize.LG);
          break;
        case window.matchMedia('(max-width: 1280px)').matches:
          setDeviceSize(DeviceSize.XL);
          break;

        default:
          break;
      }
    };

    window.addEventListener('resize', updateDeviceSize);
    return () => window.removeEventListener('resize', updateDeviceSize);
  }, []);

  return {
    deviceSize,
  };
};

export default useDevice;
