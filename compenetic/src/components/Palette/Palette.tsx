import React from 'react';
import { clsx } from 'clsx';


import type { PaletteProps } from './Palette.type';
import { COLOR_VARIABLES, PRIMARY_COLORS } from './Palette.constants';

import s from './Palette.module.css';

interface ColorInfo {
  name: string;
  variable: string;
  value: string;
  isPrimary: boolean;
}

interface ColorGroup {
  name: string;
  colors: ColorInfo[];
}

const Palette: React.FC<PaletteProps> = ({ className, preview = false }) => {
  const getCSSVariableValue = (variable: string): string => {
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    }
    return '';
  };

  const parseColorName = (variable: string): { group: string; shade: string; name: string } => {
    const match = variable.match(/--base-(\w+)-(\d+)/);
    if (match) {
      const [, group, shade] = match;
      return {
        group,
        shade,
        name: `${group.charAt(0).toUpperCase() + group.slice(1)} ${shade}`,
      };
    }
    return { group: '', shade: '', name: variable };
  };

  const generateColorGroups = (): ColorGroup[] => {
    const groupsMap: { [key: string]: ColorInfo[] } = {};

    COLOR_VARIABLES.forEach((variable) => {
      const { group, name } = parseColorName(variable);
      const value = getCSSVariableValue(variable);
      const isPrimary = Object.values(PRIMARY_COLORS).includes(variable);

      if (!groupsMap[group]) {
        groupsMap[group] = [];
      }

      groupsMap[group].push({
        name,
        variable,
        value,
        isPrimary,
      });
    });

    return Object.entries(groupsMap).map(([name, colors]) => ({
      name,
      colors: colors.sort((a, b) => {
        const aShade = parseInt(a.variable.match(/(\d+)$/)?.[1] || '0');
        const bShade = parseInt(b.variable.match(/(\d+)$/)?.[1] || '0');
        return aShade - bShade;
      }),
    }));
  };

  const colorGroups = generateColorGroups();

  const getPreviewColors = (): ColorInfo[] => {
    return Object.values(PRIMARY_COLORS).map((variable) => {
      const { name } = parseColorName(variable);
      const value = getCSSVariableValue(variable);
      return {
        name,
        variable,
        value,
        isPrimary: true,
      };
    });
  };

  const handleColorClick = async (color: ColorInfo) => {
    await navigator.clipboard.writeText(color.variable);
  };

  if (preview) {
    const previewColors = getPreviewColors();

    return (
      <div className={clsx(s.palettePreview, className)}>
        <h1 className={s.title}>Color Palette Preview</h1>
        <div className={s.colorGrid}>
          {previewColors.map((color) => (
            <div
              key={color.variable}
              className={s.colorCard}
              onClick={() => handleColorClick(color)}
              title={`Click to copy ${color.variable}`}
            >
              <div className={s.colorSwatch} style={{ backgroundColor: `var(${color.variable})` }}>
                <div className={s.primaryBadge}>Primary</div>
              </div>
              <div className={s.colorInfo}>
                <div className={s.colorName}>{color.name}</div>
                <div className={s.colorValue}>{color.variable}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(s.palette, className)}>
      <h1 className={s.title}>Color Palette</h1>

      {colorGroups.map((group) => (
        <div key={group.name} className={s.colorGroup}>
          <h2 className={s.groupTitle}>{group.name}</h2>
          <div className={s.colorGrid}>
            {group.colors.map((color) => (
              <div
                key={color.variable}
                className={s.colorCard}
                onClick={() => handleColorClick(color)}
                title={`Click to copy ${color.variable}`}
              >
                <div
                  className={s.colorSwatch}
                  style={{ backgroundColor: `var(${color.variable})` }}
                >
                  {color.isPrimary && <div className={s.primaryBadge}>Primary</div>}
                </div>
                <div className={s.colorInfo}>
                  <div className={s.colorName}>{color.name}</div>
                  <div className={s.colorValue}>{color.variable}</div>
                  {color.value && <div className={s.colorValue}>{color.value}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Palette;
