import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HighScoreTableDataSource, HighScoreTableItem } from './high-score-table-datasource';

@Component({
  selector: 'app-high-score-table',
  templateUrl: './high-score-table.component.html',
  styleUrls: ['./high-score-table.component.scss']
})
export class HighScoreTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<HighScoreTableItem>;
  dataSource: HighScoreTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Score', 'Name'];
  @Input() data
  ngOnInit() {
    this.dataSource = new HighScoreTableDataSource(this.data.List);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
