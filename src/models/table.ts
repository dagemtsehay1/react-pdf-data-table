import React from 'react';

export interface TableColumn {
    title: string;
    accessor: string;
    render?: (record: any) => React.ReactNode;
    width?: number;
  }
  export interface TableProps {
    columns: TableColumn[];
    data: any[];
    noHeader?: boolean;
    headerBackground?: string;
    striped?: boolean;
    stripedBackgroundColor?: string;
    textAlign?: "left" | "right" | "center";
  }