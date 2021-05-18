import { Component, Input, OnInit } from '@angular/core';
import { TreeService } from './tree.service';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: [ './tree.component.css' ],
  providers: [TreeService]
})
export class TreeComponent implements OnInit  {
  @Input() nodes;

  constructor (private treeService: TreeService) {}
  
  ngOnInit() {
    this.nodes = this.treeService.processNodes(this.nodes);
  }

  public onFolderButtonClick(folder) {
    folder['expand'] = !folder['expand'];
  }

  public trackNode(index, folder) {
    return folder.name;
  }
}
