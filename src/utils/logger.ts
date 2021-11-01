const clear = () => console.clear();

const log = (...args: any[]) => console.log(...args);

const mark = (title: string, ...args: any[]) => {
  const bannerTitle = '=== ' + title + ' ===';
  const repeatCount = bannerTitle.length;
  const banner = [
    '='.repeat(repeatCount),
    bannerTitle,
    '='.repeat(repeatCount),
    ''
  ];
  const temp: any[] = [];
  args.forEach((item, index) => {
    if (index === 0) {
      if (/%[a-z]\s/.test(title)) {
        temp.push(title);
      } else {
        item = banner.join('\n') + item;
      }
    }
    temp.push(item);
  });
  log(...temp);
};

export const createLogger = (debugEnabled = false) => {
  const logger = {
    clear,
    log,
    mark,
    debug: {
      log: (...args: any[]) => {
        if (debugEnabled) log(...args);
      },
      mark: (title: string, ...args: any[]) => {
        if (debugEnabled) mark(title, ...args);
      }
    }
  };

  return logger;
};
