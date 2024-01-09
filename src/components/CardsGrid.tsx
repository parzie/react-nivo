import { Grid } from '@mui/joy';
import React from 'react'

interface CardsGridProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  columns: number;
}

const GRID_DEFAULT_SETTINGS = {
  total_columns: 12,
  default_column_size: 3,
  gap: 2,
}

const CardsGrid = <T extends object>({ items, renderItem, columns }: CardsGridProps<T>) => {
  const { gap, total_columns, default_column_size } = GRID_DEFAULT_SETTINGS;

  const columnSize = columns && total_columns % columns === 0 ? total_columns / columns : total_columns / default_column_size;

  return (
    <Grid container spacing={gap}>
      {items.map((item, index) => {
        return (
          <Grid xs={total_columns} md={columnSize} key={index}>
            {renderItem(item)}
          </Grid>)
      })}
    </Grid>
  )
}

export default CardsGrid;
