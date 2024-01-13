import * as os from 'os';
import * as dns from 'dns';

function getLocalIPAddress(): void {
  const interfaces = os.networkInterfaces();
  const addresses: string[] = [];

  Object.keys(interfaces).forEach((iface) => {
    interfaces[iface]?.forEach((details) => {
      if (details.family === 'IPv4' && !details.internal) {
        addresses.push(details.address);
      }
    });
  });

  dns.lookup('google.com', (err, address) => {
    if (err) {
      console.error('Ошибка при получении основного IP-адреса:', err);
      return;
    }
    console.log('Ваш основной IP-адрес:', address);
  });
}

getLocalIPAddress();