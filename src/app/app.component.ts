import { Component, OnInit } from '@angular/core';
import { TreeService } from './tree/tree.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [TreeService]
})
export class AppComponent implements OnInit {
  public nodes: any;

  constructor(private treeService: TreeService) {}
  
  ngOnInit() {
    this.nodes = this.treeService.fetchNodes();
  }
}
