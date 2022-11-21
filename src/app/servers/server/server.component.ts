import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

   constructor(private serversService: ServersService,private router:ActivatedRoute,
    private rou:Router) { }

  ngOnInit() {
   const getid=+this.router.snapshot.params['id'];
    this.server = this.serversService.getServer(getid);

    this.router.params.subscribe(
      (pram:Params) => {
        this.server=this.serversService.getServer(+pram['id']);
      }
    )
  }

  OnEdit(){
    this.rou.navigate(['edit'], { relativeTo: this.router,queryParamsHandling : 'preserve'})
  }

}
